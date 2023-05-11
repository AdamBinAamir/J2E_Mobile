import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/userScreens/Dashboard';
import EditProfile from '../screens/EditProfile';
import FindJobs from '../screens/FindJobs';
import Forgot from '../screens/Forgot';
import Login_Org from '../screens/Login_Org';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import SignUp_Org from '../screens/SignUp_Org';
import Message from '../screens/Message'
import MessageList from '../screens/MessageList';
import MyJobs from '../screens/MyJobs';
import OrganizationEditProfile from '../screens/OrganizationEditProfile';
import OrganizationProfile from '../screens/OrganizationProfile';
import OurJobs from '../screens/OurJobs';
import PostJob from '../screens/PostJob';
import Profile from '../screens/Profile';
import RequiredSkills from '../screens/RequiredSkills';
import Setting from '../screens/Setting';
import GeneralDetails from '../screens/ApplicantScreens/GeneralDetails';
import PreviousExperience from '../screens/ApplicantScreens/PreviousExperience';
import PreviousSkill from '../screens/ApplicantScreens/PreviousSkills';
import OrganizationDetail from '../screens/OrganizationScreens/OrganizationDetails';
import Applicant from '../screens/userScreens/Applicant';
import Organization from '../screens/userScreens/Organization';
import BottomTabNavigation from './BottomTabNavigation';
import MessageStackNavigator from './MessageStackNavigator';
import OrganizationSettingNavigator from './OrganizationSettingNavigator';
import ApplicantSettingNavigator from './ApplicantSettingNavigator';
import Org_Dashboard from './Org_Dashboard';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'EditProfile' }} />
        <Stack.Screen name="FindJobs" component={FindJobs} options={{ title: 'FindJobs' }} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ title: 'Forgot' }} />
        <Stack.Screen name="Login_Org" component={Login_Org} options={{ title: 'Login_Org' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' }} />
        <Stack.Screen name="SignUp_Org" component={SignUp_Org} options={{ title: 'SignUp_Org' }} />
        <Stack.Screen name="Message" component={Message} options={{ title: 'Message' }} />
        <Stack.Screen name="MessageList" component={MessageList} options={{ title: 'MessageList' }} />
        <Stack.Screen name="MyJobs" component={MyJobs} options={{ title: 'MyJobs' }} />
        <Stack.Screen name="OrganizationEditProfile" component={OrganizationEditProfile} options={{ title: 'OrganizationEditProfile' }} />
        <Stack.Screen name="OrganizationProfile" component={OrganizationProfile} options={{ title: 'OrganizationProfile' }} />
        <Stack.Screen name="OurJobs" component={OurJobs} options={{ title: 'OurJobs' }} />
        <Stack.Screen name="PostJob" component={PostJob} options={{ title: 'PostJob' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="RequiredSkills" component={RequiredSkills} options={{ title: 'RequiredSkills' }} />
        <Stack.Screen name="Setting" component={Setting} options={{ title: 'Setting' }} />
        <Stack.Screen name="GeneralDetails" component={GeneralDetails} options={{ title: 'GeneralDetails' }} />
        <Stack.Screen name="PreviousExperience" component={PreviousExperience} options={{ title: 'PreviousExperience' }} />
        <Stack.Screen name="PreviousSkill" component={PreviousSkill} options={{ title: 'PreviousSkill' }} />
        <Stack.Screen name="OrganizationDetail" component={OrganizationDetail} options={{ title: 'OrganizationDetail' }} />
        <Stack.Screen name="Applicant" component={Applicant} options={{ title: 'Applicant' }} />
        <Stack.Screen name="Organization" component={Organization} options={{ title: 'Organization' }} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ title: 'BottomTabNavigation' }} />
        <Stack.Screen name="MessageStackNavigator" component={MessageStackNavigator} options={{ title: 'MessageStackNavigator' }} />
        <Stack.Screen name="OrganizationSettingNavigator" component={OrganizationSettingNavigator} options={{ title: 'OrganizationSettingNavigator' }} />
        <Stack.Screen name="ApplicantSettingNavigator" component={ApplicantSettingNavigator} options={{ title: 'ApplicantSettingNavigator' }} />
        <Stack.Screen name="Org_Dashboard" component={Org_Dashboard} options={{ title: 'Org_Dashboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;