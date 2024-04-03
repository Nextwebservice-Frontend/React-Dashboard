import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Ecommerce = () => {
    return (
        <div>
            <Accordion
                className="border"

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="text-[14px] font-semibold "
                >
                    <AddShoppingCartOutlinedIcon sx={{ mr: "10px", mb: "1px",color:"#7e7e7e" }} />

                    <Typography fontSize="large"  sx={{color:"#7e7e7e"}}>
                        eCommerce
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="space-y-4">
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100 "
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Dashboard
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Product
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Order
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Customer
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Manage Reviews
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Referrals
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Settings
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Ecommerce;