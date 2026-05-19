import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Enrolment/Contact
  app.post("/api/enrol", (req, res) => {
    const { name, email, phone, course, message } = req.body;
    console.log("New Enrolment Request:", { name, email, phone, course, message });
    
    // In a real app, this would send an email or save to a database.
    // For now, we simulate success.
    res.json({ success: true, message: "Enrolment request received! We will contact you soon." });
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("New Contact Message:", { name, email, message });
    res.json({ success: true, message: "Message sent! Thank you for contacting Career Solutions Academy." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
