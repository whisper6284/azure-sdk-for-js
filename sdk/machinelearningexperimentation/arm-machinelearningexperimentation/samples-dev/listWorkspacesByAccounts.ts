/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Lists all the available machine learning workspaces under the specified team account.
 *
 * @summary Lists all the available machine learning workspaces under the specified team account.
 * x-ms-original-file: specification/machinelearningexperimentation/resource-manager/Microsoft.MachineLearningExperimentation/preview/2017-05-01-preview/examples/ListWorkspacesByAccounts.json
 */
import { MLTeamAccountManagementClient } from "@azure/arm-machinelearningexperimentation";
import { DefaultAzureCredential } from "@azure/identity";

async function listWorkspacesByAccounts() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const accountName = "testaccount";
  const resourceGroupName = "accountcrud-1234";
  const credential = new DefaultAzureCredential();
  const client = new MLTeamAccountManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workspaces.listByAccounts(
    accountName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listWorkspacesByAccounts().catch(console.error);
