/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves the details of a VPN site.
 *
 * @summary Retrieves the details of a VPN site.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VpnSiteGet.json
 */
async function vpnSiteGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const vpnSiteName = "vpnSite1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnSites.get(resourceGroupName, vpnSiteName);
  console.log(result);
}

vpnSiteGet().catch(console.error);
