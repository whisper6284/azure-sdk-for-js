/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IotHub } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { IotHubClient } from "../iotHubClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import { FailoverInput, IotHubManualFailoverOptionalParams } from "../models";

/** Class containing IotHub operations. */
export class IotHubImpl implements IotHub {
  private readonly client: IotHubClient;

  /**
   * Initialize a new instance of the class IotHub class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClient) {
    this.client = client;
  }

  /**
   * Perform manual fail over of given hub
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverInput Region to failover to. Must be a azure DR pair
   * @param options The options parameters.
   */
  async beginManualFailover(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: IotHubManualFailoverOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { iotHubName, resourceGroupName, failoverInput, options },
      manualFailoverOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Perform manual fail over of given hub
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverInput Region to failover to. Must be a azure DR pair
   * @param options The options parameters.
   */
  async beginManualFailoverAndWait(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: IotHubManualFailoverOptionalParams
  ): Promise<void> {
    const poller = await this.beginManualFailover(
      iotHubName,
      resourceGroupName,
      failoverInput,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const manualFailoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.failoverInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
