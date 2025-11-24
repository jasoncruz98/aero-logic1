import { createLandingPageViewModel } from "./LandingPageService";

export const LandingPage = () => {
    //current time
    const { workInterval } = createLandingPageViewModel(new Date());

    return <><div data-test="work-interval">Work interval: {workInterval}</div></>;
};
