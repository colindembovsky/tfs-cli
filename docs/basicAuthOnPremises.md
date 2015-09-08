#Using tfx-cli with Basic Authentication against On Premises TFS
In order to use tfx against on premises TFS servers, you need to configure Basic Authentication for the tfs virtual applicaiton in IIS. This is temporary since NTLM support is coming soon.

> _Security Warning!_
> Please note that basic authentication sends usernames and passwords in plain text, so you should consider [configuring TFS to use SSL](https://msdn.microsoft.com/en-us/library/aa833872.aspx).

##Configuring Basic Auth
Follow these steps to enable basic authentication in IIS for TFS.
1. If you have not already done so, install the Bascic Autentication feature for IIS using Server Manager. This feature is found under Server Roles->Web Server (IIS)->Web Server->Security.
