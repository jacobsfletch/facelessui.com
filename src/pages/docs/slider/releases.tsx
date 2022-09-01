import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const SliderReleases = () => (
  <Releases
    packageSlug="slider"
    packageLabel="Slider"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/releases.tsx`}
      metaTitle="Slider Releases"
      metaDescription="Releases history  for the @faceless-ui/slider npm module."
      metaURL="/docs/slider/releases"
    />
  )
};

SliderReleases.Layout = DocLayout;

export default SliderReleases;
