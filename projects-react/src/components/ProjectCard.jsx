import React from 'react';
import { Card, CardContent, CardActions, Typography, Stack } from '@mui/material';
import HardwareList from './HardwareList.jsx';

export default function ProjectCard({ project, action }) {
  if (!project) return null;

  const { name, description, hardwareSets } = project;

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={0.5}>
          <Typography variant="h6" component="h2">{name}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
          <HardwareList hardwareSets={hardwareSets} />
        </Stack>
      </CardContent>
      <CardActions>
        {action}
      </CardActions>
    </Card>
  );
}
