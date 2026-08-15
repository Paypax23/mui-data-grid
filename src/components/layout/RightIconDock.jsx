import {  Paper, Stack, IconButton } from "@mui/material";
import {
  SearchOutlined,
  ChatBubbleOutlineOutlined,
  LocalShippingOutlined,
  AutoAwesomeOutlined,
  SupportAgentOutlined,
  AutorenewOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

export const RightIconDock = () => {
  const handleIconClick = (iconName) => {
    console.log(`${iconName} clicked`);
  };


  const Group2Icons = [
    { id: "search", icon: SearchOutlined, label: "Search" },
    { id: "chat", icon: ChatBubbleOutlineOutlined, label: "Chat" },
    { id: "shipping", icon: LocalShippingOutlined, label: "Shipping" },
  ];

  const Group3Icons = [
    { id: "awesome", icon: AutoAwesomeOutlined, label: "AutoAwesome" },
    { id: "support", icon: SupportAgentOutlined, label: "Support" },
    { id: "renew", icon: AutorenewOutlined, label: "Renew" },
    {
      id: "notifications",
      icon: NotificationsNoneOutlined,
      label: "Notifications",
    },
  ];

  const IconGroup = ({
    icons,
    isWhiteBackground = false,
  }) => (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "20px",
        padding: 1,
        backgroundColor:isWhiteBackground? "#ffffff" : "#e5e5e5",
        display: "flex",
        border:isWhiteBackground ?"1px solid #1976d2" : "none",
        flexDirection: "column",
        gap: 0.1,
        backdropFilter: "blur(10px)",
      }}
    >
      <Stack spacing={0} direction="column">
        {icons.map((item) => {
          const IconComponent = item.icon;
          return (
            <IconButton
              key={item.id}
              size="small"
              onClick={() => handleIconClick(item.label)}
              sx={{
                width: 20,
                height: 44,
                borderRadius: "50%",
                backgroundColor: "transparent",
                color: "#111111",
              }}
            >
              <IconComponent sx={{ fontSize: 20 }} />
            </IconButton>
          );
        })}
      </Stack>
    </Paper>
  );

  return (
    <Paper
    elevation={0}
      sx={{
        borderRadius: "100px",
        position: "fixed",
        left: 0,
        paddingX:0.5,
        height: "95vh",
        top: "50%",
        backgroundColor: "#e5e5e5",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent:"space-between",
        zIndex: 1000,
        alignItems: "center",
      }}
    >

      <IconGroup icons={Group2Icons} isWhiteBackground={false} />

      <IconGroup icons={Group3Icons} isWhiteBackground={true} />

      <IconButton
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: "#D6E3E9",
          color: "#666",

          marginTop: 1,
        }}
        onClick={() => handleIconClick("Settings")}
      >
        <SettingsOutlined sx={{ fontSize: 20 }} />
      </IconButton>
    </Paper>
  );
};
