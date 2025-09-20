
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";
import type { ProductType } from "../types/Types";
import { useNavigate } from "react-router-dom";



interface ProductProps {
    product:ProductType
}

function ProductCard(props: ProductProps) {
    const { id, image, title, price, description } = props.product;
    const navigate = useNavigate();

    const submit = () => {
        navigate(`/product-detail/${id}`);
        
    }

    return (
        <Card
            sx={{
                cursor: "pointer",
                height: "50",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 30px",
            }}
        >
            <img src={image} width={200} height={200} />
            <CardContent sx={{ height: "140px" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title.substring(0, 40)}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description.substring(0, 100)}...
                </Typography>
            </CardContent>
            <div style={{marginBottom:"10px"}}>{price} ₺</div>
            <CardActions>
                <Button size="small" color="primary" variant="outlined"
                    onClick={()=>submit()}
                >
                    DETAY
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;


