# MediaShuttleApi.PortalMember

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | The email address of the portal member | [optional] 
**role** | **String** | The role the user is assigned on this portal. Ops is short for operations administrator, and represents an administrator of portal activity. Members are allowed to use the portal to transfer files. The operations administrator role includes the member role. | [optional] [default to 'Member']
**expiresOn** | **String** | The date and time the portal member account expires. If the portal member account is not set to expire, this field will not be present. | [optional] 
**portalPermissions** | **Object** | The user's permissions on the portal | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `member` (value: `"Member"`)

* `ops` (value: `"Ops"`)




