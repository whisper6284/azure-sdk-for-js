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
  LeaseContainerRequest,
  BlobContainersLeaseOptionalParams,
  StorageManagementClient
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @summary The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-09-01/examples/BlobContainersLease_Acquire.json
 */
async function acquireALeaseOnAContainer() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const containerName = "container6185";
  const parameters: LeaseContainerRequest = {
    action: "Acquire",
    breakPeriod: undefined,
    leaseDuration: -1,
    leaseId: undefined,
    proposedLeaseId: undefined
  };
  const options: BlobContainersLeaseOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.lease(
    resourceGroupName,
    accountName,
    containerName,
    options
  );
  console.log(result);
}

acquireALeaseOnAContainer().catch(console.error);

/**
 * This sample demonstrates how to The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @summary The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-09-01/examples/BlobContainersLease_Break.json
 */
async function breakALeaseOnAContainer() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const containerName = "container6185";
  const parameters: LeaseContainerRequest = {
    action: "Break",
    breakPeriod: undefined,
    leaseDuration: undefined,
    leaseId: "8698f513-fa75-44a1-b8eb-30ba336af27d",
    proposedLeaseId: undefined
  };
  const options: BlobContainersLeaseOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.lease(
    resourceGroupName,
    accountName,
    containerName,
    options
  );
  console.log(result);
}

breakALeaseOnAContainer().catch(console.error);
