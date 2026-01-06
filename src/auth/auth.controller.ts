import { Body, Controller, Post } from '@nestjs/common';
import type { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    // POST /auth/signup
    @Post('signup')
    async signup(@Body() body: SignUpDTO) {
        this.authService.signup(body)

        return body;
    }
    
    // POST /auth/signin
    @Post('signin')
    async signin(@Body() body: SignInDTO){
        this.authService.signin(body)
        
        return body;
    }
}


