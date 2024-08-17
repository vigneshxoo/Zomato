import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { IoIosArrowDown } from "react-icons/io";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  
  };

  return (
    <div className='w-full h-full bg-[#FCFCFC] '>
       
        <div className='w-full h-full flex flex-col justify-center items-center w-full h-[500px] gap-5 p-14 mt-10'>
        <h1 className='font-fam text-3xl mr-[44%]'>Explore options near me</h1>
      <Accordion className='w-[1000px] border-2 border-b-0 ' 
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
       
        
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary 
       
          expandIcon={ <IoIosArrowDown />}  
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='p-3 h-10   '>Popular cuisines near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className=''>
          Bakery food near me  Beverages food near meBiryani food near meBurger food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meMomos food near meMughlai food near meNorth Indian food near mePizza food near meRolls food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near meTea food near me
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='w-[1000px] border-2 border-b-0 '>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='p-3 h-10'>Popular restaurant types near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meCocktail Bars near meConfectioneries near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meIrani Cafes near meKiosks near meLounges near mePaan Shop near meQuick Bites near meShacks near meSweet Shops near me
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='w-[1000px] border-2 border-b-0 '>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='p-3 h-10 '>Popular restaurant types near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta sequi ratione quos excepturi numquam veniam dolorum veritatis id aperiam adipisci! Similique reiciendis earum neque et obcaecati tenetur unde voluptate.
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='w-[1000px] border-2 border-b-0 '>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='p-3 h-10'>Cities We Deliver To</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography > <h1>hi</h1>   </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
