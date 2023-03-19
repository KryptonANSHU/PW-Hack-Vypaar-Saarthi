import React, { useEffect } from 'react'
import LoadingModal from '../components/Modal/LoadingModal'

const loading = () => {
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 6000);
    }, [])
    const [loading, setLoading] = useState(true);
  return (
    <LoadingModal showModal={loading} />
  )
}

export default loading