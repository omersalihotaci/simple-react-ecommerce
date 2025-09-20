import { useEffect } from "react"
import ProductService from "../services/ProductService"
import { useDispatch, useSelector } from "react-redux";
import type { ProductType } from "../types/Types";
import { toast } from "react-toastify";
import { setLoading } from "../redux/slices/userSlice";
import { setProducts } from "../redux/slices/productSlice";
import type { RootState } from "../redux/store";
import ProductCard from "../components/ProductCard";
import Container from "@mui/material/Container";
import SideBar from "../components/SideBar";


function Home() {

  const {products}= useSelector((state:RootState)=>state.product)
  const dispatch = useDispatch();

  const getAllProduct = async() => {
    try {
      dispatch(setLoading(true));
       const response:ProductType[] =await ProductService.getAll();
      if (response) {
        dispatch(setProducts(response));
       }
    } catch (error) {
      toast.error("ürünler getirilirken hata oluştu"+error)
    } finally {
      dispatch(setLoading(false));
    }
   
  }

  useEffect(() => {
    getAllProduct()
  },[])

  return (
    <div style={{ display: "flex" }}>
      
      <SideBar/>
          <Container>
              <div
                  style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
            flexWrap: "wrap",
                      marginTop:"40px"
                  }}
              >
                  {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
              </div>
          </Container>
      </div>
  );
}

export default Home




