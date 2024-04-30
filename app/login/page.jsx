"use client"

import { useState } from 'react';
import * as Components from "@/app/ui/loginComponents/components";
import "@/app/ui/loginComponents/styles.css";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const IndexPage = () => {
    const [signIn, toggle] = useState(true);
    return (
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Icons>
                <Components.icon>
                  <Link href="/dashboard">
                    <FaGoogle />
                  </Link>
                </Components.icon>

                <Components.icon>
                    <FaFacebook />
                </Components.icon>

                <Components.icon>
                    <FaGithub />
                </Components.icon>
                
                <Components.icon>
                    <FaLinkedin />
                </Components.icon>
            </Components.Icons>
            <Components.Paragraph>
                or use your email for registration
            </Components.Paragraph>
            <Components.Input type="text" placeholder="Name" />
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Icons>
                <Components.icon>
                    <FaGoogle />
                </Components.icon>
                <Components.icon>
                    <FaFacebook />
                </Components.icon>
                <Components.icon>
                    <FaGithub />
                </Components.icon>
                <Components.icon>
                    <FaLinkedin />
                </Components.icon>
            </Components.Icons>
            <Components.Paragraph>
                or use your email password
            </Components.Paragraph>
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    );
};

export default IndexPage;
