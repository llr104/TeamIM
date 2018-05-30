/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Server.IMGroupGetShieldRsp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.IM.BaseDefine.ShieldStatus');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IM.Server.IMGroupGetShieldRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IM.Server.IMGroupGetShieldRsp.repeatedFields_, null);
};
goog.inherits(proto.IM.Server.IMGroupGetShieldRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Server.IMGroupGetShieldRsp.displayName = 'proto.IM.Server.IMGroupGetShieldRsp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IM.Server.IMGroupGetShieldRsp.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Server.IMGroupGetShieldRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Server.IMGroupGetShieldRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMGroupGetShieldRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shieldStatusListList: jspb.Message.toObjectList(msg.getShieldStatusListList(),
    proto.IM.BaseDefine.ShieldStatus.toObject, includeInstance),
    attachData: msg.getAttachData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IM.Server.IMGroupGetShieldRsp}
 */
proto.IM.Server.IMGroupGetShieldRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Server.IMGroupGetShieldRsp;
  return proto.IM.Server.IMGroupGetShieldRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Server.IMGroupGetShieldRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Server.IMGroupGetShieldRsp}
 */
proto.IM.Server.IMGroupGetShieldRsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGroupId(value);
      break;
    case 2:
      var value = new proto.IM.BaseDefine.ShieldStatus;
      reader.readMessage(value,proto.IM.BaseDefine.ShieldStatus.deserializeBinaryFromReader);
      msg.addShieldStatusList(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAttachData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Server.IMGroupGetShieldRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Server.IMGroupGetShieldRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMGroupGetShieldRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getShieldStatusListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.IM.BaseDefine.ShieldStatus.serializeBinaryToWriter
    );
  }
  f = message.getAttachData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      20,
      f
    );
  }
};


/**
 * optional uint32 group_id = 1;
 * @return {number}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.Server.IMGroupGetShieldRsp.prototype.setGroupId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated IM.BaseDefine.ShieldStatus shield_status_list = 2;
 * @return {!Array.<!proto.IM.BaseDefine.ShieldStatus>}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.getShieldStatusListList = function() {
  return /** @type{!Array.<!proto.IM.BaseDefine.ShieldStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IM.BaseDefine.ShieldStatus, 2));
};


/** @param {!Array.<!proto.IM.BaseDefine.ShieldStatus>} value */
proto.IM.Server.IMGroupGetShieldRsp.prototype.setShieldStatusListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.IM.BaseDefine.ShieldStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IM.BaseDefine.ShieldStatus}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.addShieldStatusList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.IM.BaseDefine.ShieldStatus, opt_index);
};


proto.IM.Server.IMGroupGetShieldRsp.prototype.clearShieldStatusListList = function() {
  this.setShieldStatusListList([]);
};


/**
 * optional bytes attach_data = 20;
 * @return {string}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.getAttachData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes attach_data = 20;
 * This is a type-conversion wrapper around `getAttachData()`
 * @return {string}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.getAttachData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAttachData()));
};


/**
 * optional bytes attach_data = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAttachData()`
 * @return {!Uint8Array}
 */
proto.IM.Server.IMGroupGetShieldRsp.prototype.getAttachData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAttachData()));
};


/** @param {!(string|Uint8Array)} value */
proto.IM.Server.IMGroupGetShieldRsp.prototype.setAttachData = function(value) {
  jspb.Message.setProto3BytesField(this, 20, value);
};

