package com.ysq.dao;

import com.ysq.pojo.Vehicle;
import com.ysq.utils.DBUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class VehicleDAO {
    private VehicleDAO() {
    }
    /**
     * 通过车牌号获取车信息
     * @param vehicleId 车牌号
     * @return 车
     */
    public static Vehicle[] queryVehicleWithVehicleId(String vehicleId) {
        String sql = "select vehicleId,brand,perRent,type_name,model" +
                " from vehicle,vehicle_type,car" +
                " where vehicleId = vehicle_id" +
                "   and vehicleId = ?" +
                "  and type_id = type" +
                " union" +
                " select vehicleId,brand,perRent,type_name,model" +
                " from vehicle,vehicle_type,truck" +
                " where vehicleId = vehicle_id" +
                "   and vehicleId = ?" +
                "  and type_id = type" +
                " union" +
                " select vehicleId,brand,perRent,type_name,model" +
                " from vehicle,vehicle_type,bus" +
                " where vehicleId = vehicle_id" +
                "   and vehicleId = ?" +
                "  and type_id = type";

        Connection connection = DBUtils.getConnection();
        PreparedStatement p = null;
        ResultSet rs = null;

        try {
            p = connection.prepareStatement(sql);
            p.setString(1,vehicleId);
            p.setString(2,vehicleId);
            p.setString(3,vehicleId);

            rs = p.executeQuery();
            Vehicle[] vehicles = Vehicle.createVehicles(rs);
            return vehicles;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtils.close(connection,p,rs);
        }
    }

    /**
     * 查询类型的车
     * @param type 类型
     * @return 车
     */
    public static Vehicle[] queryVehicleWithType(String type) {
        String sql = "select vehicleId,brand,perRent,type_name,model" +
                " from vehicle,vehicle_type,"+Vehicle.getTypeName(type) +
                " where type=type_id and vehicleId=vehicle_id";

        Connection connection = DBUtils.getConnection();
        PreparedStatement p = null;
        ResultSet rs = null;
        try {
            p = connection.prepareStatement(sql);
            rs = p.executeQuery();

            Vehicle[] vehicles = Vehicle.createVehicles(rs);
            return vehicles;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtils.close(connection,p,rs);
        }
    }

    /**
     * 通过品牌获取汽车信息
     * @param type
     * @param brand
     * @return
     */
    public static Vehicle[] queryVehicleWithBrand(String type,String brand) {
        String sql = "select vehicleId,brand,perRent,type_name,model" +
                    " from vehicle,vehicle_type,"+Vehicle.getTypeName(type)+
                    " where type = type_id and brand = ? and vehicleId=vehicle_id;";
        Connection connection = DBUtils.getConnection();
        PreparedStatement p = null;
        ResultSet rs = null;

        try {
            p = connection.prepareStatement(sql);
            p.setString(1,brand);
            rs = p.executeQuery();
            return Vehicle.createVehicles(rs);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            DBUtils.close(connection,p,rs);
        }
    }

    /**
     *
     * @param type
     * @return
     */
    public static String[] queryBrands(String type) {
        String sql = "select distinct brand from vehicle" +
                " where type = (select type_id from vehicle_type where type_name=?)";

        Connection connection = DBUtils.getConnection();
        PreparedStatement p = null;
        ResultSet rs = null;

        try {
            p = connection.prepareStatement(sql);
            p.setString(1,type);

            rs = p.executeQuery();
            return DBUtils.parseToString(rs,"brand");
        } catch (SQLException e) {
            System.out.println(e);
            throw new RuntimeException(e);
        }
    }
}