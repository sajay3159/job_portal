import { getJobs } from '@/api/apiJobs';
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const JobListing = () => {

    const { session } = useSession();

    const fetchJobs = async () => {
        superbaseAccessToken = await session.getToken({
            template: 'supabase'
        });
        const data = await getJobs(superbaseAccessToken);
        // console.log("data--------", data)
    }

    useEffect(() => {
        fetchJobs()
    }, [])
    return (
        <div>JobListing</div>
    )
}

export default JobListing