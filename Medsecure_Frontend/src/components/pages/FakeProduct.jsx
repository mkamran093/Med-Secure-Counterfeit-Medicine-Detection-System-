import { Box, Paper, Typography, Button } from '@mui/material';
import backgroundImage from '../../img/bg.png';
import { useNavigate } from 'react-router-dom';

const ProductAlert = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-2)
    }

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            minHeight: "80vh",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
            overflowY: "scroll"
        }}>

            <Paper elevation={3} sx={{ width: "400px", margin: "auto", marginTop: "10%", marginBottom: "10%", padding: "3%", backgroundColor: "#e3eefc" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Montserrat",
                        textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                    }}    
                >
                    Product Authentication Failure
                </Typography>
                <Typography
                variant="h5"
                sx={{
                    fontFamily: "Montserrat",
                    textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                }}   >
                    We regret to inform you that the product you scanned is not genuine. It seems to be a counterfeit.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "Montserrat",
                        textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                    }}    
                >
                    Counterfeiting is a significant concern, and we are actively addressing it. We advise against using this product as it may pose serious health risks. Additionally, we encourage you to report it to the manufacturer via the helpline for further assistance.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "Montserrat",
                        textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                    }}    
                >
                    Thank you for utilizing our anti-counterfeiting system. We hope it has helped you avoid potentially harmful health consequences.
                </Typography>

                <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            onClick={handleReturn}
                            sx={{
                                marginTop: "5%",
                            }}
                        >
                            Return
                        </Button>
                    </Box>    
            </Paper>
        </Box>
    )
}

export default ProductAlert;

