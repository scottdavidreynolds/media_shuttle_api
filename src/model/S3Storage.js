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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MediaShuttleApi) {
      root.MediaShuttleApi = {};
    }
    root.MediaShuttleApi.S3Storage = factory(root.MediaShuttleApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The S3Storage model module.
   * @module model/S3Storage
   * @version 1.13.3
   */

  /**
   * Constructs a new <code>S3Storage</code>.
   * Storage configuration details specific to AWS S3 Storage.
   * @alias module:model/S3Storage
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>S3Storage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/S3Storage} obj Optional instance to populate.
   * @return {module:model/S3Storage} The populated <code>S3Storage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('roleARN'))
        obj.roleARN = ApiClient.convertToType(data['roleARN'], 'String');
      if (data.hasOwnProperty('bucket'))
        obj.bucket = ApiClient.convertToType(data['bucket'], 'String');
      if (data.hasOwnProperty('externalId'))
        obj.externalId = ApiClient.convertToType(data['externalId'], 'String');
      if (data.hasOwnProperty('serverSideEncryption'))
        obj.serverSideEncryption = ApiClient.convertToType(data['serverSideEncryption'], 'Boolean');
      if (data.hasOwnProperty('filePrefix'))
        obj.filePrefix = ApiClient.convertToType(data['filePrefix'], 'String');
    }
    return obj;
  }

  /**
   * The role ARN for the AWS S3 Storage.
   * @member {String} roleARN
   */
  exports.prototype.roleARN = undefined;

  /**
   * The name of the S3 bucket.
   * @member {String} bucket
   */
  exports.prototype.bucket = undefined;

  /**
   * The unique identifier used to secure the S3 storage, as entered when creating the roleARN.
   * @member {String} externalId
   */
  exports.prototype.externalId = undefined;

  /**
   * Encrypt file contents at rest in S3.
   * @member {Boolean} serverSideEncryption
   * @default false
   */
  exports.prototype.serverSideEncryption = false;

  /**
   * Prefix to prepend to files transfered to this location. Can be used to drop all files into a sub-directory.
   * @member {String} filePrefix
   * @default ''
   */
  exports.prototype.filePrefix = '';


  return exports;

}));
