import { Banner } from "../common/Banner";
import { NumberCard } from "../common/NumberCard";
import { ALL_USERS } from '../../graphql/StudentQueries';
import { useQuery } from "@apollo/client";
import { TitleBarService } from "../../services/TitleBarService";
import { useThemeProps } from "@mui/system";

// import {Banner} from '@ajinkya-dhote/react-components';

const transformText = (t) => {
    t = t.replace(/_/g, " ");
    return t;
}

export function Home() {
    const { loading, error, data: userData} = useQuery(ALL_USERS);
    let userTypes = {};

    TitleBarService.setTitle('Home');

    if (userData && userData.users) {
        console.log(userData.users);
        userTypes = {}
       userData.users.forEach(u => {
           let key = transformText(u.type)
            if (userTypes[key]) {
                userTypes[key] +=1;
            } else {
                userTypes[key] = 1;
            }
        })
        console.log(userTypes);
    }

    return (
        <>
            <Banner title="Welcome"/>
            <div className="number-stripe">

                {
                    Object.keys(userTypes).map(u => <NumberCard key={u} description={u} number={userTypes[u]} className="bandner"/>)
                }
                
                {/* <NumberCard description="students" number="1" className="banner"/>
                <NumberCard description="students" number="1" className="banner"/>
                <NumberCard description="students" number="1" className="banner"/>
                <NumberCard description="students" number="1" className="banner"/>
                <NumberCard description="students" number="1" className="banner"/> */}
            </div>
            
            
        </>
      
    )
}