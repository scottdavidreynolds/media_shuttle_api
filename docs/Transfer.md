# MediaShuttleApi.Transfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The transfer identifier | [optional] 
**portalId** | **String** | The portal identifier | [optional] 
**packageId** | **String** | The package identifier | [optional] 
**state** | **String** | The state of the transfer | [optional] 
**protocol** | **String** | The transfer protocol | [optional] 
**connectedServer** | **String** | The name of the sending or receiving storage server | [optional] 
**direction** | **String** | an upload or download | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**startTime** | **String** | The start time of the transfer | [optional] 
**activeTransferDetails** | **Object** | Additional information about active transfers | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `active` (value: `"active"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `mxwan` (value: `"mxwan"`)

* `mxtcp` (value: `"mxtcp"`)

* `http` (value: `"http"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `download` (value: `"download"`)

* `upload` (value: `"upload"`)




