/*
 * Media Shuttle API
 * Signiant's **Media Shuttle Management API** endpoints allows you to automate portal and storage management and view active transfers using your own web applications.  The **System-to-Person API** allows you to create upload and download links directly from other applications, letting you accelerate file transfers through Media Shuttle.  For more information about getting started with the Media Shuttle API, read our [Getting Started Guide](http://developer.signiant.com/msapi/getting-started.html).  ---   You can test API endpoints using your Media Shuttle subscription by generating an API key from your IT Administration user menu, in the **Developer** section.  Once you have generated an API key, click the **Authorize** button, and enter your API key in the **Value** field, and click **Authorize** to enable the examples. 
 *
 * OpenAPI spec version: 1.13.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/FileSetRequest', 'model/FileSetResponse', 'model/ModelPackage', 'model/PackageEventSetResponse', 'model/PackageTokenRequest', 'model/PackageTokenResponse', 'model/PortalSubscriptionRequest', 'model/PortalSubscriptionResponse', 'model/PortalSubscriptionsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/FileSetRequest'), require('../model/FileSetResponse'), require('../model/ModelPackage'), require('../model/PackageEventSetResponse'), require('../model/PackageTokenRequest'), require('../model/PackageTokenResponse'), require('../model/PortalSubscriptionRequest'), require('../model/PortalSubscriptionResponse'), require('../model/PortalSubscriptionsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.MediaShuttleApi) {
      root.MediaShuttleApi = {};
    }
    root.MediaShuttleApi.SystemToPersonApi = factory(root.MediaShuttleApi.ApiClient, root.MediaShuttleApi.Error, root.MediaShuttleApi.FileSetRequest, root.MediaShuttleApi.FileSetResponse, root.MediaShuttleApi.ModelPackage, root.MediaShuttleApi.PackageEventSetResponse, root.MediaShuttleApi.PackageTokenRequest, root.MediaShuttleApi.PackageTokenResponse, root.MediaShuttleApi.PortalSubscriptionRequest, root.MediaShuttleApi.PortalSubscriptionResponse, root.MediaShuttleApi.PortalSubscriptionsResponse);
  }
}(this, function(ApiClient, Error, FileSetRequest, FileSetResponse, ModelPackage, PackageEventSetResponse, PackageTokenRequest, PackageTokenResponse, PortalSubscriptionRequest, PortalSubscriptionResponse, PortalSubscriptionsResponse) {
  'use strict';

  /**
   * SystemToPerson service.
   * @module api/SystemToPersonApi
   * @version 1.13.3
   */

  /**
   * Constructs a new SystemToPersonApi. 
   * @alias module:api/SystemToPersonApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPortalSubscription operation.
     * @callback module:api/SystemToPersonApi~createPortalSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortalSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribe to portal events 
     * Create a subscription to receive Media Shuttle event notifications. You can receive notifications for:   - package.upload.complete: When a package upload completes.   - package.upload.canceled: When a package upload is canceled.   - package.upload.failed: When a package upload fails.   - package.download.complete: When a package download completes.   - package.download.canceled: When a package download is canceled.   - package.download.failed: When a package download fails.   - The webhook URL will recieve a http POST call whenever there is an event. The event details structure is defined in the PortalSubscriptionEvent Model  Signiant recommends that webhook handlers check the event type to ensure future compatibility. 
     * @param {String} portalId Unique portal identifier
     * @param {module:model/PortalSubscriptionRequest} portalSubscriptionRequest 
     * @param {module:api/SystemToPersonApi~createPortalSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortalSubscriptionResponse}
     */
    this.createPortalSubscription = function(portalId, portalSubscriptionRequest, callback) {
      var postBody = portalSubscriptionRequest;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling createPortalSubscription");
      }

      // verify the required parameter 'portalSubscriptionRequest' is set
      if (portalSubscriptionRequest === undefined || portalSubscriptionRequest === null) {
        throw new Error("Missing the required parameter 'portalSubscriptionRequest' when calling createPortalSubscription");
      }


      var pathParams = {
        'portalId': portalId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortalSubscriptionResponse;

      return this.apiClient.callApi(
        '/portals/{portalId}/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createToken operation.
     * @callback module:api/SystemToPersonApi~createTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackageTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create transfer link 
     * Create a package upload or download token. This generates a URL to distribute to a user for their file transfer. 
     * @param {String} portalId Unique portal identifier
     * @param {String} packageId 
     * @param {module:model/PackageTokenRequest} packageTokenRequest 
     * @param {module:api/SystemToPersonApi~createTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PackageTokenResponse}
     */
    this.createToken = function(portalId, packageId, packageTokenRequest, callback) {
      var postBody = packageTokenRequest;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling createToken");
      }

      // verify the required parameter 'packageId' is set
      if (packageId === undefined || packageId === null) {
        throw new Error("Missing the required parameter 'packageId' when calling createToken");
      }

      // verify the required parameter 'packageTokenRequest' is set
      if (packageTokenRequest === undefined || packageTokenRequest === null) {
        throw new Error("Missing the required parameter 'packageTokenRequest' when calling createToken");
      }


      var pathParams = {
        'portalId': portalId,
        'packageId': packageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PackageTokenResponse;

      return this.apiClient.callApi(
        '/portals/{portalId}/packages/{packageId}/tokens', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePortalSubscription operation.
     * @callback module:api/SystemToPersonApi~deletePortalSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a portal subscription 
     * Delete a subscription from a portal. 
     * @param {String} portalId Unique portal identifier
     * @param {String} subscriptionId Unique portal subscription identifier
     * @param {module:api/SystemToPersonApi~deletePortalSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePortalSubscription = function(portalId, subscriptionId, callback) {
      var postBody = null;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling deletePortalSubscription");
      }

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling deletePortalSubscription");
      }


      var pathParams = {
        'portalId': portalId,
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/portals/{portalId}/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPackages operation.
     * @callback module:api/SystemToPersonApi~getPackagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelPackage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get package information 
     * Returns information about a package, including all package metadata. 
     * @param {String} portalId Unique portal identifier
     * @param {String} packageId Unique package identifier
     * @param {module:api/SystemToPersonApi~getPackagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelPackage}
     */
    this.getPackages = function(portalId, packageId, callback) {
      var postBody = null;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling getPackages");
      }

      // verify the required parameter 'packageId' is set
      if (packageId === undefined || packageId === null) {
        throw new Error("Missing the required parameter 'packageId' when calling getPackages");
      }


      var pathParams = {
        'portalId': portalId,
        'packageId': packageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelPackage;

      return this.apiClient.callApi(
        '/portals/{portalId}/packages/{packageId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalSubscriptions operation.
     * @callback module:api/SystemToPersonApi~getPortalSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortalSubscriptionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get portal subscriptions 
     * Get all subscriptions for a portal. 
     * @param {String} portalId Unique portal identifier
     * @param {module:api/SystemToPersonApi~getPortalSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortalSubscriptionsResponse}
     */
    this.getPortalSubscriptions = function(portalId, callback) {
      var postBody = null;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling getPortalSubscriptions");
      }


      var pathParams = {
        'portalId': portalId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortalSubscriptionsResponse;

      return this.apiClient.callApi(
        '/portals/{portalId}/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the portalsPortalIdPackagesPackageIdEventsGet operation.
     * @callback module:api/SystemToPersonApi~portalsPortalIdPackagesPackageIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PackageEventSetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show package events 
     * Show a list of transfer events associated with a package. 
     * @param {String} portalId Unique portal identifier
     * @param {String} packageId Unique package identifier
     * @param {module:api/SystemToPersonApi~portalsPortalIdPackagesPackageIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PackageEventSetResponse}
     */
    this.portalsPortalIdPackagesPackageIdEventsGet = function(portalId, packageId, callback) {
      var postBody = null;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling portalsPortalIdPackagesPackageIdEventsGet");
      }

      // verify the required parameter 'packageId' is set
      if (packageId === undefined || packageId === null) {
        throw new Error("Missing the required parameter 'packageId' when calling portalsPortalIdPackagesPackageIdEventsGet");
      }


      var pathParams = {
        'portalId': portalId,
        'packageId': packageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PackageEventSetResponse;

      return this.apiClient.callApi(
        '/portals/{portalId}/packages/{packageId}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the portalsPortalIdPackagesPackageIdFilesGet operation.
     * @callback module:api/SystemToPersonApi~portalsPortalIdPackagesPackageIdFilesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileSetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show package contents 
     * Returns an array of all files contained within a package. 
     * @param {String} portalId Unique portal identifier
     * @param {String} packageId The requested package ID
     * @param {module:api/SystemToPersonApi~portalsPortalIdPackagesPackageIdFilesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileSetResponse}
     */
    this.portalsPortalIdPackagesPackageIdFilesGet = function(portalId, packageId, callback) {
      var postBody = null;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling portalsPortalIdPackagesPackageIdFilesGet");
      }

      // verify the required parameter 'packageId' is set
      if (packageId === undefined || packageId === null) {
        throw new Error("Missing the required parameter 'packageId' when calling portalsPortalIdPackagesPackageIdFilesGet");
      }


      var pathParams = {
        'portalId': portalId,
        'packageId': packageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileSetResponse;

      return this.apiClient.callApi(
        '/portals/{portalId}/packages/{packageId}/files', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the portalsPortalIdPackagesPost operation.
     * @callback module:api/SystemToPersonApi~portalsPortalIdPackagesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelPackage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new package 
     * Create an empty file package. 
     * @param {String} portalId Unique portal identifier
     * @param {module:api/SystemToPersonApi~portalsPortalIdPackagesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelPackage}
     */
    this.portalsPortalIdPackagesPost = function(portalId, callback) {
      var postBody = null;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling portalsPortalIdPackagesPost");
      }


      var pathParams = {
        'portalId': portalId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelPackage;

      return this.apiClient.callApi(
        '/portals/{portalId}/packages', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putPackages operation.
     * @callback module:api/SystemToPersonApi~putPackagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileSetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add files to a package 
     * Add files to a package. This endpoint accepts an array of files. 
     * @param {String} portalId Unique portal identifier
     * @param {String} packageId The package that the files are being added to
     * @param {module:model/FileSetRequest} fileset 
     * @param {module:api/SystemToPersonApi~putPackagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileSetResponse}
     */
    this.putPackages = function(portalId, packageId, fileset, callback) {
      var postBody = fileset;

      // verify the required parameter 'portalId' is set
      if (portalId === undefined || portalId === null) {
        throw new Error("Missing the required parameter 'portalId' when calling putPackages");
      }

      // verify the required parameter 'packageId' is set
      if (packageId === undefined || packageId === null) {
        throw new Error("Missing the required parameter 'packageId' when calling putPackages");
      }

      // verify the required parameter 'fileset' is set
      if (fileset === undefined || fileset === null) {
        throw new Error("Missing the required parameter 'fileset' when calling putPackages");
      }


      var pathParams = {
        'portalId': portalId,
        'packageId': packageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FileSetResponse;

      return this.apiClient.callApi(
        '/portals/{portalId}/packages/{packageId}/files', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
