import { Box, Paper, Typography } from '@mui/material';
import backgroundImage from '../../img/bg.png';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const tableColumns = [
    { field: 'name', headerName: 'Name', width: 120, editable: true },
    {
        field: 'description',
        headerName: 'Description',
        width: 300,
        editable: true
    },
    { field: 'username', headerName: 'Username', width: 130, editable: true },
    { field: 'website', headerName: 'Website', width: 200, editable: true },
    { field: 'location', headerName: 'Location', width: 200, editable: true },
    { field: 'role', headerName: 'Role', width: 130, editable: true },
    { field: 'image', headerName: 'Image', width: 130 }
];

const ManageAccount = () => {
    const [tableRows, setTableRows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/profileAll');
            setTableRows(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            minHeight: "80vh",
            backgroundRepeat: "no-repeat",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            zIndex: -2,
            overflowY: "scroll"
        }}>
            <Paper elevation={3} sx={{ width: "80%", margin: "auto", height: "530px", marginTop: "5%", marginBottom: "5%", padding: "3%", backgroundColor: "#e3eefc" }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center", marginBottom: "3%",
                        fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
                    }}
                >
                    Manage Account
                </Typography>
                <Paper sx={{ height: 400, width: '100%', backgroundColor: "#e3eefc" }}>
                    <DataGrid
                        rows={tableRows}
                        columns={tableColumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Paper>
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
                            marginTop: "3%",
                        }}
                    >
                        Return
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default ManageAccount;

