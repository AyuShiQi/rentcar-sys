package com.ysq.pojo;

import java.util.Scanner;

/**
 * 客车类
 */
public class Bus extends Vehicle {
    /**
     * 座位数
     */
    private int seats;

    /**
     * 创建Bus对象
     */
    public Bus() {
        super("未知", "未知", 0);
        seats = 0;
    }

    /**
     * 创建BUS对象
     *
     * @param vehicleId 车牌号
     * @param brand     品牌
     * @param perRent   日租金
     * @param seats     座位数
     */
    public Bus(String vehicleId, String brand, int perRent, int seats) {
        super(vehicleId, brand, perRent);
        this.seats = seats;
    }

    @Override
    public float calRent(int days) {
        float rent;
        if (days < 3) rent = getPerRent() * days;
        else if (days < 7) rent = getPerRent() * days * 0.9F;
        else if (days < 30) rent = getPerRent() * days * 0.8F;
        else if (days < 150) rent = getPerRent() * days * 0.7F;
        else rent = getPerRent() * days * 0.6F;

        return rent;
    }

    @Override
    public String getTypeName() {
        return "载客数";
    }

    @Override
    public String getModel() {
        return getSeatsWithUnit();
    }

    @Override
    public void updateModel() {

    }

    @Override
    public String getName() {
        return "客车";
    }

    /**
     * 获取座位数
     *
     * @return 座位数
     */
    public int getSeats() {
        return seats;
    }

    /**
     * 获取带单位的座位数
     *
     * @return 座位数
     */
    public String getSeatsWithUnit() {
        return seats + "座";
    }

    /**
     * 设置座位数
     *
     * @param seats 新座位数
     */
    public boolean setSeats(int seats) {
        if (seats <= 0) return false;
        this.seats = seats;
        return true;
    }
}