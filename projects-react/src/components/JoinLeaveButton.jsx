// below: button to toggle join/leave state
import React from 'react';
import { Button } from '@mui/material';

// below: stateless button that calls back to parent
export default function JoinLeaveButton({ isMember, onToggle }) {
  // below: choose label based on membership
  const label = isMember ? 'leave project' : 'join project';
  // below: choose color based on membership
  const color = isMember ? 'secondary' : 'primary';

  // below: render button
  return (
    <Button size="small" variant="contained" color={color} onClick={onToggle}>
      {label}
    </Button>
  );
}
