import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { Module } from '../../module/Module';
export const SuccessPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('/order')
    }, 2000)
    return () => clearTimeout(timeOut)
  }, [navigate]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Payment Successfully!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for shopping
        </AlertDescription>
      </Alert>
      <Module />
      <Module />
    </div>
  )
}
