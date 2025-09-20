import { RiShoppingBasket2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import { InputBase } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../redux/slices/productSlice";
import ProductService from "../services/ProductService";
import { setProducts } from "../redux/slices/productSlice";
import type { ProductType } from "../types/Types";
import { setLoading, setLog } from "../redux/slices/userSlice";
import Logo from "../images/logo.png"
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
    const navigate = useNavigate();

    const numOfProduct = useSelector((store: RootState) => store.basket.basket).length;
    const dispatch = useDispatch();

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            dispatch(setLoading(true));
            const value = e.target.value;
            if (value) {
                dispatch(filterProduct(value));
            } else {
                const response: ProductType[] = await ProductService.getAll();
                dispatch(setProducts(response));
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const exit = () => {
        navigate("/login");
        dispatch(setLog(false));

    }

    return (
        <AppBar style={{ backgroundColor: "gray" }} position="static">
            <Toolbar>
                <img
                    onClick={()=>navigate("/home")}
                    src={Logo} style={{ width: "50px", marginRight: "20px" ,cursor:"pointer"}} />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                >
                    Taslak Proje
                </Typography>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        padding: "0 8px",
                        borderRadius: "8px",
                    }}
                >
                    <SearchIcon style={{ color: "gray" }} />
                    <InputBase
                        placeholder="Ara..."
                        sx={{ ml: 1, flex: 1 }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange(e)
                        }
                    />
                </div>
                <Badge badgeContent={numOfProduct} color="primary">
                    <RiShoppingBasket2Line
                        onClick={()=>dispatch(setDrawer(true))}
                        style={{
                            marginLeft: "20px",

                            fontSize: "30px",
                            cursor: "pointer",
                        }}
                    />
                </Badge>

                <Button
                    onClick={()=>exit()}
                    color="inherit"
                    sx={{ marginLeft: "15px", fontSize: "15px" }}
                >
                    çıkış
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
