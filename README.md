# PoliBridge
## A Cross-chain Bridge & Swapper

### StableCoin Today’s Ecosystem

    Currently, dollar-based stablecoins are quite well developed with the existence of bridges through most of the blockchains. But we noticed a lack of bridges for non-dollar stablecoins, jFiat for exemples. Our idea is to answer that need in creating a Cross-Chain bridge with Swapping capabilities, using Starton Notify and Fleek technologies.

#### I.Starton Notify functionality
    Starton provides an API-platform to connect any application to blockchains. Inside the Starton Notify module, the Starton Watcher object of type “ERC20 Transfer'' informs us when a specific address is involved in a transfer of ERC20 on an EVM blockchain. This application supports  Ethereum, Avalanche, BSC, and Polygon. We decided to use this functionality to establish a verified communication system between blockchains.

#### II. PoliBridge

    The aim of our dApp is to allow jFiat holders to seamlessly bridge and swap their tokens from one chain to another. 





## First Use Case: Stablecoin Bridge


The Jarvis protocol emits a type of stablecoin (for example a jEuro) on several blockchains. 
Step 1: In order for a user to bridge their jEuro stablecoin jEuro to another blockchain, they lock some in the blockchain A. 
Step 2:The Starton Watcher notifies and validates that deposit to the PoliBridge app. 
Step 3: On the backend, the PoliBridge app uses that validation to send an authorized transaction to smart-contract B.
Step 4: With the authentication received by the transaction from the PoliBridge app, the Smart Contract B unlocks and sends the same amount of token x to the user in the blockchain B.








## Second Use Case: Cross-Chain Swapping



If the user wants now to swap jEuro in blockchain A directly to another type of jFiat existing in Blockchain B, they will be able to do it. The process is the same as a simple bridge except there is an intermediate transaction between the SC B and the user, which consists of swapping the token x to the token y in calling an existing pool on blockchain B.


III.Benefits

Unlocking the bridge and the seamless flow for non-dollar based stablecoins opens important economic opportunities:
-Reducing fees: Currently to bridge a significant list of non-dollar based stablecoins, users need to swap them to dollar based stablecoins, bridge them, and swap them again on the arrival blockchain. By allowing direct bridges, we reduce the fees concerning the use of those non-dollar based. 
-Harmonized price: We also allow for more arbitrage opportunities between the difference of price of those tokens in different blockchains, which results in a more harmonized price of those assets through all the blockchains.
-Increase attractivity and use of non-dollar based stablecoins: By developing the economic ecosystem of non-dollar based stablecoins, we increase their attractivity and reduce their dependency to dollar-based stablecoins.

IV. Security

We tackle the security requirements by hosting our PoliBridge app onto Fleek, which uses the IPFS technology. 
Transparency
By using Fleek, we allow for anyone to see the code executed by our backend app which is responsible for unlocking the tokens on the other side of the bridge. 
Decentralization of Execution and Storage
With Fleek and IPFS, we allow decentralized execution and storage of our code so that our dApp is censorship-resistant and guarantees its execution.

VI. Financial Rentability

    By putting a small fee for the use of our bridge (which already reduces fees for people who want to bridge those tokens that are currently not supported by any bridge), we can generate revenue. That revenue is sustainable as we are going to be used by:

    -already existing non-dollar-based stablecoins private holders
    -arbitrators that are going to benefit from our reduced fees
    -institutions that needs to use non-dollar based stablecoins

V. Next Steps & Roadmap

Adding new use case: Cross-Chain Payment
In the two use cases presented above, the address of the user in the blockchain A and the blockchain B is the same. It is easily possible to set a recipient address when interacting with the PoliBridge app, so that the token sent on blockchain B arrives at the recipient address. That functionality would unlock cross-payment system

Establishing partnership with stablecoins emitters
We are going to get in touch with stablecoins emitters such as Jarvis Network, MIMO Capital, Stasis, so that we can directly benefit from their userbase and developp PoliBridge applications for their stablecoins.

Pre-seeding PoliBridge project
By reaching VC we will be able to develop further the project in exchange of a share of the revenue fees we generate with PoliBridge.

Extending the bridge to other type of token
Currently, only the ERC20 type is supported. We plan to allow more types of token to be bridged.
