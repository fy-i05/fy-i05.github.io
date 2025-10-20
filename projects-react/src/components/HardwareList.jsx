// below: present hardware usage for a project
import React from 'react';
import { Stack, Typography } from '@mui/material';

// below: list of hardware sets with simple usage text
export default function HardwareList({ hardwareSets }) {
  // below: early return if no data
  if (!hardwareSets || hardwareSets.length === 0) {
    return <Typography variant="body2" color="text.secondary">no hardware allocated</Typography>;
  }

  // below: render each hardware set
  return (
    <Stack spacing={0.5} sx={{ mt: 1 }}>
      {hardwareSets.map(({ setId, total, checkedOut }) => {
        const available = total - checkedOut;
        return (
          <Typography key={setId} variant="body2">
            {setId}: {checkedOut} checked out / {available} available (total {total})
          </Typography>
        );
      })}
    </Stack>
  );
}
