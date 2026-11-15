const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// extensions: ["html"] permite abrir /portafolio en vez de /portafolio.html
app.use(express.static("public", { extensions: ["html"] }));
app.listen(PORT, () => console.log(`Portafolio en http://localhost:${PORT}`));
