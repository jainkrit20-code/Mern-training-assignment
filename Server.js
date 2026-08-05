const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");
const connectDB = require("./db"); 
const UserModel = require("./userModel");
const authModel = require("./authModel"); 
const ProductModel = require("./productModel");
const app = express();
      
      app.use(express.json());
       app.use(cookieParser());
        
       app.post("/test", async (req, res) => {
        try { 
       const user = await UserModel.create(req.body); 
       res.json({ message: "Data saved in MongoDB", data: user });
     } 
     catch (err) { console.log(err); 
        
        res.status(500).send("Error saving data");
     }
     });
      
       app.get("/test", async (req, res) => { const users = await UserModel.find({}); 
       res.json(users); 
    });
      
     app.get("/setcookie", (req, res) => { res.cookie("username", "Nandita");
         res.send("Cookie set successfully");
         });
        
           app.get("/getcookie", (req, res) => { res.json(req.cookies);

            });
             
              app.post("/register", async (req, res) => { try { const { name, email, password } = req.body; 
              if (!name || !email || !password) { return res.status(400).json({ message: "All fields are required" });
             } 
             const userExist = await authModel.findOne({ email });
              if (userExist) { return res.status(400).json({ message: "User already exists" });
             } const hashedPassword = await bcrypt.hash(password, 10); 
             const user = await authModel.create({ name, email, password: hashedPassword, });
              res.status(201).json({ message: "User registered successfully", user, });
             }
              catch (err) { console.log(err); res.status(500).json({ message: "Internal server error" });
             }
             });
             
               app.post("/login", async (req, res) => { try { const { email, password } = req.body; 
               const user = await authModel.findOne({ email });
                if (!user) { return res.status(400).json({ message: "User does not exist" });
            
            } 
            const isMatch = await bcrypt.compare(password, user.password); 
            if (!isMatch) { return res.status(400).json({ message: "Invalid password" }); 
        } const token = jwt.sign( { id: user._id, email: user.email }, "mysecretkey", { expiresIn: "1d" } ); 
        res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, });
         res.json({ message: "Login successful", token }); 
        } 
        catch (err) { console.log(err); res.status(500).json({ message: "Internal server error" }); 
    } 
});
 
  app.get("/logout", (req, res) => { res.clearCookie("token");
     res.json({ message: "Logout successful" });
     }); 
     
     const verifyToken = (req, res, next) => { try { const token = req.cookies.token;
         if (!token) { return res.status(401).json({ message: "Token required" }); 
        } 
        const decoded = jwt.verify(token, "mysecretkey");
         req.user = decoded; next();
         }
          catch (err) { return res.status(401).json({ message: "Invalid token" });
         } }; 
         
          app.post("/createProduct", verifyToken, async (req, res) => 
            { try { const { name, SKU, description, price, category } = req.body; 
          if (!name || !SKU || !description || !price || !category) 
            {
             return res.status(400).json({ message: "All fields are required" });
            } 
         const productExist = await ProductModel.findOne({ SKU });
          if (productExist) { return res.status(400).json({ message: "Product already exists" });
         }
          const product = await ProductModel.create({ name, SKU, description, price, category, }); 
          res.status(201).json({ message: "Product created successfully", product, });
         } 
         catch (err) { console.log(err);
             res.status(500).json({ message: "Internal server error" });
             } });
              
              app.get("/getAllProduct", verifyToken, async (req, res) => 
                { try { const page = Number(req.query.page) || 1; const limit = Number(req.query.limit) || 5;
                     const products = await ProductModel.find({}) .select("-__v") .skip((page - 1) * limit) .limit(limit) .sort({ createdAt: -1 });
                      res.json({ page, limit, total: products.length, products, });
                     } 
                     catch (err) { console.log(err); 
                        res.status(500).json({ message: "Internal server error" });
                     }
                     }); 
                      
                     app.get("/getSingleProduct/:id", verifyToken, async (req, res) => { try { const product = await ProductModel.findById(req.params.id); 
                        if (!product) { return res.status(404).json({ message: "Product not found" });
                     } res.json(product);
                     } catch (err) { console.log(err);
                         res.status(500).json({ message: "Internal server error" });
                         }
                         }); 
                          
                         app.patch("/updateSingleProduct/:id", verifyToken, async (req, res) => { try { const product = await ProductModel.findById(req.params.id);
                             if (!product) { return res.status(404).json({ message: "Product not found" });
                             }
                              const updatedProduct = await ProductModel.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true } );
                              res.json({ message: "Product updated successfully", updatedProduct, }); 
                            } catch (err) { console.log(err); res.status(500).json({ message: "Internal server error" }); 
                        } });
                          
                         app.delete("/deleteProduct/:id", verifyToken, async (req, res) => { try { const product = await ProductModel.findById(req.params.id);
                             if (!product) { return res.status(404).json({ message: "Product not found" });
                             }
                              await ProductModel.findByIdAndDelete(req.params.id); 
                              res.json({ message: "Product deleted successfully" }); 
                            } catch (err) { console.log(err); res.status(500).json({ message: "Internal server error" });
                         } 
                        });
                         
                         connectDB().then(() => { app.listen(3000, () => { console.log("Server running on port 3000");

                          }); 
                        });