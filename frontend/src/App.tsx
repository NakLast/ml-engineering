import { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    if (!prompt) {
      alert("กรุณากรอกข้อความ prompt");
      return;
    }
    setLoading(true);
    setStory("");
    try {
      const response = await axios.post("http://localhost:3001/api/genstory", { 
        prompt });
      console.log(response.data);
      setStory(response.data);
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการเรียก API");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{mb:5}}>
        Generate นิยาย
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        <TextField
          label="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          multiline
          rows={3}
          fullWidth
        />
      </Box>

      <Button variant="contained" onClick={generateStory} disabled={loading}>
        {loading ? <CircularProgress size={24} color="inherit" /> : "Generate Story"}
      </Button>

      {story && (
        <Box sx={{ mt: 4, p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
          <Typography variant="h6">Generated Story</Typography>
          <Typography sx={{ mt: 1, whiteSpace: "pre-line" }}>{story}</Typography>
        </Box>
      )}
    </Container>
  );
}
