import NextAuth from "next-auth"
import GitHubProviders from "next-auth/providers/github"

export default NextAuth({
    providers:[
        GitHubProviders({
            clientId:"46a019eb4797e97a2df8",
            clientSecret:"c914283a88e787cc261648eab7fc933f78607a1b"
        })
    ]
})