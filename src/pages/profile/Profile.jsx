import React, { useState, useEffect } from 'react';
import './Profile.css';
import avatar from '../../images/avatar.jpg'
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, Flex, Avatar, Box, Heading, Text } from '@chakra-ui/react';
import { Module } from '../../module/Module';
export const Profile = () => {
    const [userToken, setUserToken] = useState();
    const [userDetail, setUserDetail] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            setUserToken(token);
            setUserDetail(JSON.parse(localStorage.getItem("foundUser")));
        }
    }, [userToken]);
    return (
        <div>
            <div id='profile-data'>
                {userDetail ?
                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='profile' src={avatar} />
                                    <Box>
                                        <Heading size='sm'>{userDetail.firstName} </Heading>
                                        <Text>{userDetail.email}</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card> :
                    <div id='please-login'><p id='profile-statement'>To continue, please login to your account in order to access and view your profile</p>
                        <p id='profile-login-button' onClick={() => navigate('/login')}>Login To View</p></div>
                }
            </div>
            <Module />
        </div>
    )
}
