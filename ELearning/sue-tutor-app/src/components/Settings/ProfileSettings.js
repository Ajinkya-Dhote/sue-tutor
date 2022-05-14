import { Box } from "@mui/material";
import { grey } from '@mui/material/colors';
import PersonalInfo from '../common/PersonalInfo';
import ContactInfo from '../common/ContactInfo';
import AcademicInfo from '../common/AcademicInfo';
import PreferedSubject from '../common/PreferedSubject';

export default function ProfileSetttings() {
    return (
        <Box
            sx={{
                p: 1,
                // height: '100%',
                bgcolor: grey[100],
                mt: 2,
                borderRadius: 5,
                pt: 2
                
           }}
            
        >
            <PersonalInfo />
            <ContactInfo />
            <AcademicInfo />
            <PreferedSubject />
        </Box>
    )
}