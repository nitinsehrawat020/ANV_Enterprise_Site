import Heading from "../../../ui/Heading";
import {
  AppointmentContainer,
  BoxConatiner,
  StyledAppointment,
  Title,
} from "./appointmerntStyle";
import AppointmentBox from "./AppointmentBox";

function Appointment() {
  return (
    <>
      <StyledAppointment>
        <AppointmentContainer>
          <Title>
            <Heading as="h2">How to Book An Appointment</Heading>
          </Title>
          <BoxConatiner>
            <AppointmentBox
              icon="line-md:phone-call-twotone-loop"
              title="Book Online "
              color="#2BDD66"
              description="Book a appointment with by leaving your contact information or
              call us"
            />
            <AppointmentBox
              icon="line-md:clipboard-list"
              title="Chosse Design"
              color={"#FFC107"}
              description="Choose the design that suit your choice and let us know if we can
              help"
            />
            <AppointmentBox
              icon="line-md:star-pulsating-loop"
              title="Getting started with magic"
              description="our worker start turning
              your place into your dream place"
            />
            <AppointmentBox
              icon="line-md:home"
              title="Ready to move in"
              color={"var(--color-primary-500)"}
              description="Your home will be raedy in the estimate time and it's ready for you to move in"
            />
          </BoxConatiner>
        </AppointmentContainer>
      </StyledAppointment>
    </>
  );
}

export default Appointment;
