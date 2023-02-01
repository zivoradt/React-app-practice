import express from 'express';

// need passport functionality
import passport, { authenticate } from 'passport';

// need to include the User model for authentication functions
import User from '../Models/user';


// import the DisplayName and Generate Token Utility method
import { UserDisplayName, GenerateToken } from '../Util';

// Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   passport.authenticate('local', function(err, user, info)
   {
    // are there server errors?
    if(err)
    {
        console.error(err);
        res.end(err);
    }

    // are there login errors?
    if(!user)
    {
        
        return res.json({success: false, msg: "Error: Authebtification failed"})
    }

    // no problems - we have a good username and password
    req.logIn(user, function(err)
    {
        // are there db errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

       const authToken = GenerateToken(user);
   
        return res.json({success: true, msg: "Logged In Succesffuly", user: {
            id : user._id,
            username: user.username,
            DisplayName: user.DisplayName,
            EmailAddres: user.EmailAddress
        }, token: authToken})
        
    });

   })(req, res, next);
}
 
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    // instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function(err)
    {
        if(err)
        {
            if(err.name == "UserExistsError")
            {
                console.error('ERROR: User Already Exists!');
            }
            else
            {
                console.error(err.name); // other error
            }
            return res.json({success: false, msg: 'Error: Registration Failed!'})
        }

        // everything is ok - user has been registered

        return res.json({success: true, msg: 'User Registered Succeffully'});
    });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut(function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        console.log("User Logged Out");
    });

    res.json({success: true, msg: 'Succesfuly Logged Out!'});
}


