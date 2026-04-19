const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/about', (req, res) => {
  res.json({
    name: "Ishaan Parikh",
    major: "ECE",
    year: "2029",
    hometown: "Ahmedabad"
  });
});

let projects = [
  {
    id: 1,
    title: "CEV projects",
    description: "Created custom Simultaneous Localization and Mapping (SLAM) using IMU and 3D Lidar data input on ROS2.  Designed 2 custom Printed Circuit Boards (PCBs) on Altium Designer for strain gauge, and RPM sensor. Developed embedded control on RP2040 controller on car, utilizing UART for remote communication over WiFi.",
    tech: ["SLAM", "ROS2/UART"]
  },
  {
    id: 2,
    title: "FPGA-Based 32-Bit RISC-V Processor ",
    description: "Engineered pipelined Radix-4 Booth multiplier in Verilog RTL for a RISC-V 'M' extension, with 110 MHz Fmax.",
    tech: ["RTL", "FPGA"]
  },
  {
    id: 3,
    title: "Personal Website",
    description: "A responsive personal site showcasing projects and skills.",
    tech: ["React", "CSS"]
  }
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});


app.post('/api/projects', (req, res) => {
  const { title, description, tech } = req.body;

  if (!title || !description || !tech) {
    return res.status(400).json({ error: 'title, description, and tech are required' });
  }

  if (!Array.isArray(tech)) {
    return res.status(400).json({ error: 'tech must be an array of strings' });
  }

  const newProject = {
    id: projects[projects.length - 1].id + 1,
    title,
    description,
    tech
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});


const funFacts = [
  "I used to play soccer for my state in India.",
  "I used to be ambidextrous",
  "I was born in California, and my family used to live there, before moving back to India.",
];

app.get('/api/fun-fact', (req, res) => {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  res.json({
    fact: randomFact,
    total_facts: funFacts.length
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
  console.log('');
  console.log('Available endpoints:');
  console.log('  GET  /api/about       – Info about me');
  console.log('  GET  /api/projects    – My projects');
  console.log('  POST /api/projects    – Add a project');
  console.log('  GET  /api/fun-fact    – Random fun fact about me');
});