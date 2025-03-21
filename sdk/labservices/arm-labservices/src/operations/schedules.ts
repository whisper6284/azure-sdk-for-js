/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Schedules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LabServicesClient } from "../labServicesClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Schedule,
  SchedulesListByLabNextOptionalParams,
  SchedulesListByLabOptionalParams,
  SchedulesListByLabResponse,
  SchedulesGetOptionalParams,
  SchedulesGetResponse,
  SchedulesCreateOrUpdateOptionalParams,
  SchedulesCreateOrUpdateResponse,
  ScheduleUpdate,
  SchedulesUpdateOptionalParams,
  SchedulesUpdateResponse,
  SchedulesDeleteOptionalParams,
  SchedulesListByLabNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Schedules operations. */
export class SchedulesImpl implements Schedules {
  private readonly client: LabServicesClient;

  /**
   * Initialize a new instance of the class Schedules class.
   * @param client Reference to the service client
   */
  constructor(client: LabServicesClient) {
    this.client = client;
  }

  /**
   * Returns a list of all schedules for a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param options The options parameters.
   */
  public listByLab(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListByLabOptionalParams
  ): PagedAsyncIterableIterator<Schedule> {
    const iter = this.listByLabPagingAll(resourceGroupName, labName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLabPagingPage(resourceGroupName, labName, options);
      }
    };
  }

  private async *listByLabPagingPage(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListByLabOptionalParams
  ): AsyncIterableIterator<Schedule[]> {
    let result = await this._listByLab(resourceGroupName, labName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByLabNext(
        resourceGroupName,
        labName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByLabPagingAll(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListByLabOptionalParams
  ): AsyncIterableIterator<Schedule> {
    for await (const page of this.listByLabPagingPage(
      resourceGroupName,
      labName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of all schedules for a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param options The options parameters.
   */
  private _listByLab(
    resourceGroupName: string,
    labName: string,
    options?: SchedulesListByLabOptionalParams
  ): Promise<SchedulesListByLabResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, options },
      listByLabOperationSpec
    );
  }

  /**
   * Returns the properties of a lab Schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    options?: SchedulesGetOptionalParams
  ): Promise<SchedulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, scheduleName, options },
      getOperationSpec
    );
  }

  /**
   * Operation to create or update a lab schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    body: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams
  ): Promise<SchedulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, scheduleName, body, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Operation to update a lab schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param body The request body.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    body: ScheduleUpdate,
    options?: SchedulesUpdateOptionalParams
  ): Promise<SchedulesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, scheduleName, body, options },
      updateOperationSpec
    );
  }

  /**
   * Operation to delete a schedule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    options?: SchedulesDeleteOptionalParams
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
      { resourceGroupName, labName, scheduleName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to delete a schedule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param scheduleName The name of the schedule that uniquely identifies it within containing lab. Used
   *                     in resource URIs.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    scheduleName: string,
    options?: SchedulesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      labName,
      scheduleName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByLabNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account. Used
   *                in resource URIs.
   * @param nextLink The nextLink from the previous successful call to the ListByLab method.
   * @param options The options parameters.
   */
  private _listByLabNext(
    resourceGroupName: string,
    labName: string,
    nextLink: string,
    options?: SchedulesListByLabNextOptionalParams
  ): Promise<SchedulesListByLabNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, nextLink, options },
      listByLabNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLabOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedSchedules
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    201: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.scheduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLabNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PagedSchedules
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
