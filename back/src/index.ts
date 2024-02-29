import { PORT } from "./config/envs";
import app from "./server";

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
