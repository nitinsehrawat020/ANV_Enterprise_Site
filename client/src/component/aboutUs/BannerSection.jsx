import {
  BannerImages,
  BannerParagraph,
  BannerText,
  BannerTextHeading,
  ImageStyle,
  StyleBannerSection,
} from "./styleAboutUs";

function BannerSection() {
  return (
    <StyleBannerSection>
      <BannerText>
        <BannerTextHeading>Our Story</BannerTextHeading>
        <BannerParagraph>
          Founded in 2009, POP Design Pro began as a small family business with
          a passion for transforming ordinary spaces into extraordinary ones.
          Our journey started with a simple belief: every home deserves
          beautiful, functional design that reflects the personality of its
          inhabitants.
          <br />
          <br /> Over the years, we&#39;ve grown from a local craftsman shop to
          a renowned design company, but our core values remain unchanged. We
          still approach each project with the same dedication, attention to
          detail, and commitment to excellence that defined our early days.
          <br />
          <br />
          Today, we&#39;re proud to have transformed over 50 homes and
          commercial spaces, earning the trust of families and businesses
          throughout the region.
        </BannerParagraph>
      </BannerText>
      <BannerImages>
        <ImageStyle src="\pictures\aboutUS\image1.png" />
        <ImageStyle src="\pictures\aboutUS\image2.png" />
        <ImageStyle src="\pictures\aboutUS\image3.png" />
        <ImageStyle src="\pictures\aboutUS\image4.png" />
      </BannerImages>
    </StyleBannerSection>
  );
}

export default BannerSection;
