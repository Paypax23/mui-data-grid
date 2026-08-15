import { Paper, Breadcrumbs, Stack } from '@mui/material';
import { PersonOutlineOutlined } from '@mui/icons-material';

export const Breadcrumb = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        marginTop: '64px',
        padding: 2,
        mb:2,
        borderRadius: '20px',
        backgroundColor: '#ffffff',
        direction: 'rtl',
      }}
    >
      <Breadcrumbs
        separator="›"
        sx={{
          direction: 'rtl',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            cursor: 'pointer',
            color: '#999',
            fontSize: '14px',
            onClick: () => console.log('Navigate to parent'),
          }}
        >
          <span>مدیریت کاربران</span>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            fontWeight: 'bold',
            color: '#07657F',
            fontSize: '14px',
          }}
        >
          <span>اطلاعات کاربران</span>
          <PersonOutlineOutlined sx={{ fontSize: '18px' }} />
        </Stack>
      </Breadcrumbs>
    </Paper>
  );
};
