import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import type { RootState } from "../redux/store";

function Loading() {
    const { loading } = useSelector((store: RootState) => store.user);
    
    return (
        <div>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "fixed", 
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh", 
                        backgroundColor: "rgba(255,255,255,0.5)", 
                        zIndex: 9999, 
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : null}
        </div>
    );
}

export default Loading


