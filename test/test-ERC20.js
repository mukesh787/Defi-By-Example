const IERC20=artifacts.require("IERC20");

contract("IERC20",(accounts)=>{
    const DAI="0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const DAI_WHALE="0x517F9dD285e75b599234F7221227339478d0FcC8";

    it("get dai balance",async()=>{
        const dai=await IERC20.at(DAI);
        const bal=await dai.balanceOf(DAI_WHALE);

        console.log(`bal:${bal}`);
    })
})