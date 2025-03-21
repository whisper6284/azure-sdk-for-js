/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PartnerDestinationUpdateParameters,
  EventGridManagementClient
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Asynchronously updates a partner destination with the specified parameters.
 *
 * @summary Asynchronously updates a partner destination with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/PartnerDestinations_Update.json
 */
async function partnerDestinationsUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerDestinationName = "examplePartnerDestinationName1";
  const partnerDestinationUpdateParameters: PartnerDestinationUpdateParameters = {
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerDestinations.update(
    resourceGroupName,
    partnerDestinationName,
    partnerDestinationUpdateParameters
  );
  console.log(result);
}

partnerDestinationsUpdate().catch(console.error);
