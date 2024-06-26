import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      style={{ paddingTop: "50px" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Mentor Holidays
              </h6>
              <p>
                Mentor Holidays ensures that every aspect of the tour is
                meticulously planned and executed. The experienced team provides
                excellent customer service, addressing all queries and ensuring
                the students’ comfort and safety throughout the trip. The
                packages are competitively priced, offering great value for the
                unforgettable experiences provided.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                International Packages
              </h6>
              <p>Malaysia</p>
              <p>Singapore</p>
              <p>Thailand</p>
              <p>Maldives</p>
              <p>Bali</p>
              <p>Vietnam</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>Pricing</p>
              <p>Settings</p>
              <p>Orders</p>
              <p>Help</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                 Karuvankallu, Kondotty, Calicut
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                mentorholidays@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                9072107041
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" />{" "}
                9061350444
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Mentor Holidays
        </a>
      </div>
    </MDBFooter>
  );
}
