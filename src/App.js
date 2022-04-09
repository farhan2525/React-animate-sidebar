import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from "@mui/icons-material";
import "./App.css";
import Item from "./components/Item";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  // for collapsing Sidebar
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  return (
    <div className="App">
      <motion.div
        data-open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        <motion.div
          variants={sidebarVariants}
          initial={`${open}`}
          animate={`${open}`}
          className="sidebar"
        >
          {/* Lines icons */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              bacgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(5.5px)",
              webkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba(255,255,255,.18)",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon "
          >
            <TocRounded />
          </motion.div>
          {/* Profile */}
          <motion.div
            variants={profileVariants}
            initial={`${open}`}
            animate={`${open}`}
            layout
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: " rgba( 255, 255, 255, 0.3 )",
              boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: " blur( 5.5px )",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
            className="profile"
          >
            <img
              src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/123943748_1278103789221416_8041041416528328438_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEgse0MoHgDvpQZnzzU37SNXRmMsAnq9fZdGYywCer19qAzs5y8INRCOLhbtTxD0Jw7r0ckPISojICrLGF4raJJ&_nc_ohc=Hp6eQ9q0nDMAX_1wKEP&_nc_ht=scontent.fdac14-1.fna&oh=00_AT9CLAxhzU3xHfbmFNOI9DwoWbYmMzhDJo0Qn-id24YNBw&oe=6275ED28"
              alt="profile-img"
            />
          </motion.div>
          {/* Groups */}
          <div className="groups">
            {/* group one */}
            <div className="group">
              <motion.h3
                animate={{
                  opacity: open ? 1 : 0,
                  height: open ? "auto" : 0
                }}
              >
                ANALYTICS
              </motion.h3>
              <Item icon={<DashboardRounded />} name="Dashboard" />
              <Item icon={<BarChartRounded />} name="Performence" />
            </div>
            {/* group twso */}
            <div className="group">
              <motion.h3
                animate={{
                  opacity: open ? 1 : 0,
                  height: open ? "auto" : 0,
                }}
              >
                Content
              </motion.h3>
              <Item icon={<AttachMoneyRounded />} name="Sales" />
              <Item icon={<AssignmentTurnedInRounded />} name="Checklist" />
              <Item icon={<AccountCircleRounded />} name="Customers" />
            </div>
            {/* group three */}
            <div className="group">
              <motion.h3
                animate={{
                  opacity: open ? 1 : 0,
                  height: open ? "auto" : 0,
                }}
              >
                CUSTOMIZATION
              </motion.h3>
              <Item icon={<SettingsRemoteRounded />} name="Segments" />
              <Item icon={<ColorLensRounded />} name="Themes" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="body_container"></div>
    </div>
  );
}

export default App;
