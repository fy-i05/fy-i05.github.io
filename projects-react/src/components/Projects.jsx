import React, { useState, useMemo, useCallback } from 'react';
import { Container, Typography, Stack, Chip } from '@mui/material';
import ProjectCard from './ProjectCard.jsx';
import JoinLeaveButton from './JoinLeaveButton.jsx';

const initialProjects = [
  {
    id: 'alpha',
    name: 'flight weather viz',
    description: 'map-based turbulence + wind layers (web ui prototype).',
    hardwareSets: [
      { setId: 'HS1', total: 100, checkedOut: 40 },
      { setId: 'HS2', total: 50, checkedOut: 10 }
    ],
    isMember: true
  },
  {
    id: 'bravo',
    name: 'teachback vr museum',
    description: 'interactive vr stations + unity pipeline experiments.',
    hardwareSets: [
      { setId: 'HS1', total: 100, checkedOut: 5 },
      { setId: 'HS3', total: 30, checkedOut: 12 }
    ],
    isMember: false
  },
  {
    id: 'charlie',
    name: 'hyperloop pressure sim',
    description: 'esp32 + sensors + solenoids; chamber test ui.',
    hardwareSets: [
      { setId: 'HS2', total: 50, checkedOut: 25 }
    ],
    isMember: false
  }
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  const memberCount = useMemo(
    () => projects.filter(p => p.isMember).length,
    [projects]
  );

  const handleToggleJoin = useCallback((projectId) => {
    setProjects(prev =>
      prev.map(p => (p.id === projectId ? { ...p, isMember: !p.isMember } : p))
    );
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* page title */}
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1">projects</Typography>
        <Chip label={`${memberCount} joined`} color="primary" variant="outlined" />
      </Stack>

      <Stack spacing={2}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            action={
              <JoinLeaveButton
                isMember={project.isMember}
                onToggle={() => handleToggleJoin(project.id)}
              />
            }
          />
        ))}
      </Stack>
    </Container>
  );
}
